const FUNCValidateUploadFileSize = (
  fi,
  maxSize = 2048,
  strMaxSize = "2MB"
) => {
  if (fi.files.length > 0) {
    for (var i = 0; i <= fi.files.length - 1; i++) {
      const fsize = fi.files.item(i).size;
      const file = Math.round(fsize / 1024);
      if (file >= maxSize) {
        swalError(`Ukuran file terlalu besar, batas ukuran ${strMaxSize}`);
        fi.value = "";
        return null;
      }
    }
  }
};
