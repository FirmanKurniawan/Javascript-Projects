import ytdl, { VideoDetails, videoInfo } from "ytdl-core";
import fs from "fs";

import ffmpegPath from "@ffmpeg-installer/ffmpeg";
import ffmpeg from "fluent-ffmpeg";

ffmpeg.setFfmpegPath(ffmpegPath.path);

const PUBLIC_DIR = `${process.cwd()}/public`;
// const PUBLIC_DIR = "/";

export const getVideoDetails = async (url: string): Promise<VideoDetails> => {
  return await new Promise(async (resolve) => {
    const video: videoInfo = await ytdl.getBasicInfo(url);

    const details: VideoDetails = video.player_response.videoDetails;

    resolve(details);
  });
};

export const isVideoValid = (url: string): boolean => {
  const valid: boolean = ytdl.validateURL(url);
  return valid;
};

export const downloadVideo = async (
  url: string,
  format: string,
  quality?: string
): Promise<any> => {
  return await new Promise(async (resolve, reject) => {
    const videoID = ytdl.getURLVideoID(url);
    const fileName = await (await getVideoTitle(url)).replace(/\"/g, "_");

    if (format === "mp3") {
      if (fs.existsSync(`${PUBLIC_DIR}/download/mp3/${fileName}.mp3`)) {
        resolve({ url: `/download/mp3/${fileName}.mp3` });
      } else {
        let stream = ytdl(videoID, {
          quality: "highestaudio",
          filter: "audioonly",
        });

        ffmpeg(stream)
          .audioBitrate(128)
          .save(`${PUBLIC_DIR}/download/mp3/${fileName}.mp3`)
          .on("error", (err) => {
            reject(new Error(err));
          })
          .on("end", () => {
            resolve({ url: `/download/mp3/${fileName}.mp3` });
          });
      }
    } else if (format === "mp4") {
      if (quality !== "") {
        if (
          fs.existsSync(`${PUBLIC_DIR}/download/mp4/${fileName}-${quality}.mp4`)
        ) {
          resolve({
            url: `/download/mp4/${fileName}-${quality}.mp4`,
          });
        } else {
          let info = await ytdl.getInfo(videoID);
          let videoFormat = ytdl.filterFormats(info.formats, "videoandaudio");

          if (videoFormat.length > 0) {
            const isQualityAvailable = videoFormat.find(
              (format) => format.qualityLabel === quality
            );

            if (isQualityAvailable) {
              const stream = ytdl(videoID, {
                quality: getITag(quality),
                filter: "videoandaudio",
              });

              stream.pipe(
                fs.createWriteStream(
                  `${PUBLIC_DIR}/download/mp4/${fileName}-${quality}.mp4`
                )
              );

              stream.on("error", (err) => {
                reject({
                  message: err.message,
                });
              });

              stream.on("end", () => {
                resolve({
                  url: `/download/mp4/${fileName}-${quality}.mp4`,
                });
              });
            } else {
              reject(
                new Error(
                  `${quality} is not available. Please try again with a different quality`
                )
              );
            }
          } else {
            reject(
              new Error(
                "This video does not have the quality you requested. Please try again with a different quality"
              )
            );
          }
        }
      } else {
        reject(new Error("Missing quality"));
      }
    }
  });
};

export const getVideoTitle = async (url: string): Promise<string> => {
  const title = await getVideoDetails(url).then((details) => details.title);

  return `${title}`;
};

export const getITag = (quality: string | undefined): string => {
  if (quality !== undefined) {
    switch (quality) {
      case "360p":
        return "18";

      case "480p":
        return "135";

      case "720p":
        return "136";

      case "1080p":
        return "137";

      default:
        return "18";
    }
  } else {
    return "18";
  }
};
