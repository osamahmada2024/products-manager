import Swal from "sweetalert2";

const GetImageBase64 = ( file ) => {
  return new Promise((resolve, reject) => {
    let type = ["image/jpeg", "image/png","image/jpg"];
    if (type.indexOf(file.type) === -1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Type isn't Supported",
      });
      return;
    }
    
    if (file.size > 2 * 1024 * 1024) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Image Shouldn't Exceed 2MG",
        })
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    var url;
    reader.onload = () => {
      url = reader.result;
      resolve(url);
    };
    reader.onerror = () => {
      reject("Error!!!!!!");
    };
  });
};

export default GetImageBase64;
