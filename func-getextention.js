console.log(FUNCGetExtention("https://user-images.githubusercontent.com/49223890/192445254-e3038dc1-b10b-4aed-9b9c-c0c5053f21c9.png"));

const FUNCGetExtention = (fileUrl) => {
  return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};

