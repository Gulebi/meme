const maxHeight = 384;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const imageInput = document.querySelector("#image-input");
const addImageBtn = document.querySelector("#add-image-btn");

addImageBtn.addEventListener("click", () => {
    clearCanvas();
    addImage();
});

const addImage = () => {
    const file = imageInput.files[0];
    if (!file) return console.log("No image selected!");
    const reader = new FileReader();

    reader.onload = (event) => {
        const img = new Image();

        img.onload = () => {
            const h = maxHeight;
            const w = img.width * (maxHeight / img.height);

            ctx.canvas.width = w;
            ctx.canvas.height = h;
            ctx.drawImage(img, 0, 0, w, h);
        };

        img.src = event.target.result;
    };

    reader.readAsDataURL(file);
};

const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
