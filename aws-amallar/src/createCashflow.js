const AWS = require("aws-sdk");
// const FormData = require("form-data");
const formidable = require("formidable");
// const { uploadFile } = require("./uploadFile");

const CASHFLOW_TABLE_NAME = process.env.CASHFLOW_DYNAMODB_TABLE;

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const CASHFLOW_BUCKET = process.env.CASHFLOW_BUCKET;
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

module.exports.createCashflow = async (event) => {
  try {
    // console.log(event.body);
    // const body = JSON.parse(event.body);
    // const body = JSON.parse(Buffer.from(event.body, "base64").toString());
    // if (event.headers["content-type"] === "multipart/form-data") {
    // const form = new FormData();
    // form.append("file", event.file.data, {
    //   filename: event.file.name,
    //   contentType: event.file.type,
    // });
    // form.append("description", event.description);
    // form.append("ammount", event.ammount);
    // form.append("onwer", event.onwer);
    // form.append("account", event.account);
    // form.append("type", event.type);

    // const items = await form.getBuffer().promise();
    // const file = items.file;

    const form = formidable({});

    const operationProof = await uploadFile(event);
    console.log("table name =>>", CASHFLOW_TABLE_NAME);

    const putParams = {
      TableName: CASHFLOW_TABLE_NAME,
      //   TableName: "aws-amallar-cashFlowTable",
      Item: {
        primary_key: body.type,
        description: body.description,
        ammount: body.ammount,
        onwer: body.onwer,
        account: body.account,
        operationProof: operationProof,
        createdAt: Date.now(),
      },
    };
    await dynamoDB.put(putParams).promise();
    return {
      statusCode: 201,
    };
    // } else {
    // Devolver error si el evento no está en formato multipart/form-data
    //   return {
    //     statusCode: 400,
    //     body: JSON.stringify({
    //       error: "Invalid content-type. Expecting multipart/form-data",
    //     }),
    //     messageLog: console.log(eventheaders["content-type"]),
    //   };
    // }
  } catch (error) {
    console.log(error);
  }
};

async function uploadFile(file) {
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

    const s3Response = await s3.putObject(s3Params).promise();
    console.log(s3Response.Location);
    return JSON.stringify({
      file_name: fileName,
      file_url: s3Response.Location,
    });
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err.stack }),
    };
  }
}
