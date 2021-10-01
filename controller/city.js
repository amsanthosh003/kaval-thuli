const citySchema = require('./../model/city');
const errorHandler = require('./../utils/error.handler');


class CityController {
 
    async add(farm){
		try{
			let response = await citySchema.create(farm);
			return { status: "success",   msg:" Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){

            try{
                let response = await citySchema.find({});
              //  let count=Object.keys(response).length;// obj.key() =returns object in array.(count=[].length)
                return {
                    response: response,
                 //   count
                };
            }
            catch(error){
                return {
                    status: "error",
                    error: errorHandler.parseMongoError(error)
                };
            }
	}

	async fetchdata(id){
		try{
			let response = await citySchema.find({_id: id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await citySchema.deleteOne({_id: id});
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async update(id, body) {

        try {
            let response = await citySchema.update({_id: id}, body);
            return { status: "success", msg:" Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }
}
}


module.exports= new  CityController();