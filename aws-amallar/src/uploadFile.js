const AWS = require("aws-sdk");
const CASHFLOW_BUCKET = process.env.CASHFLOW_BUCKET;
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

module.exports.uploadFile = async (file) => {
  try {
    const ext = file.name.split(".").pop();
    const fileName = `file-${Date.now()}.${ext}`;
    console.log("table name =>>", CASHFLOW_BUCKET);
    console.log("file =>>", file);
    const s3Params = {
      Bucket: CASHFLOW_BUCKET,
      Key: fileName,
      Body: file.data,
      ContentType: file.type,
    };

    const s3Response = await s3.upload(s3Params).promise();
    console.log(s3Response.Location);
    return {
      file_name: fileName,
      file_url: s3Response.Location,
    };
  } catch (error) {
    console.log(error);
  }
};
