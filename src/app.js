const express = require("express");
const app = express();
const PropertyModel = require("./models/PropertyModel");
const formatProperty = require("./formatProperty");
const validId = require("./utils/validId")

app.use(express.json());

app.get("/properties", async (request, response) => {
    const properties = await PropertyModel.find({});
    const formattedProperties = properties.map((property) => {
        return formatProperty(property);
    });
    return response.status(200).send(formattedProperties);
})

app.get("/properties/:id", async (request, response) => {
    const id = request.params.id;

    if (!validId(id)){
        return response.status(400).send({ message: "id provided is invalid" })
    }
    const property = await PropertyModel.findById(id);

    if (property === null){
        return response.status(404).send({ message: "id not found" })
    }
    const formattedProperty = formatProperty(property);

    return response.status(200).send(formattedProperty);
  });

app.post("/properties", async (request, response) => {
    const { body } = request;
    const property = new PropertyModel(body);
    await property.save();
    return response.status(200).send(property);
})

module.exports = app;
