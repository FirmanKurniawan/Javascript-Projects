const FUNCValidateUploadFileExtension = (
  oInput,
  _validFileExtensions = [".jpg", ".jpeg", ".pdf", ".png"]
) => {
  var sFileName = oInput.value;
  if (sFileName.length > 0) {
    var blnValid = false;
    var msgExtension = "";
    for (var j = 0; j < _validFileExtensions.length; j++) {
      msgExtension += _validFileExtensions[j] + " ";
      var sCurExtension = _validFileExtensions[j];
      if (
        sFileName
          .substr(sFileName.length - sCurExtension.length, sCurExtension.length)
          .toLowerCase() == sCurExtension.toLowerCase()
      ) {
        blnValid = true;
        break;
      }
    }

    if (!blnValid) {
      swalError(
        `Ekstensi file tidak didukung! <br /> format harus ${msgExtension}`
      );
      oInput.value = "";
      return false;
    }
  }
};
