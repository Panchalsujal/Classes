const Imagekit = require("@imagekit/nodejs").default;
const client = new Imagekit({
  privateKey: process.env.IMAGE_PRIVET,
});

async function uploadFile({ buffer, filename, folder = "" }) {
  const file = await client.files.upload({
    file: await Imagekit.toFile(Buffer.from(buffer)),
    fileName: filename,
    folder: folder,
  });

  return file;
  
}

module.exports = { uploadFile };
