const userSchema = require('./../model/user');
const errorHandler = require('./../utils/error.handler');


class UserController {
 
    async add(farm){
		try{
			let response = await userSchema.create(farm);
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
                let response = await userSchema.find({});
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
			let response = await userSchema.find({_id: id});
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
			let response = await userSchema.deleteOne({_id: id});
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
            let response = await userSchema.update({_id: id}, body);
            return { status: "success", msg:" Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }
}

async search(name){
    try{
        let responce = await userSchema.find({name:{$regex:name,$options:"$i"}}); 
        if(!responce){
            throw new Error('invalid creds'); }
        return { response: responce  }
         } catch(error){
          return {
            status: "error",
                error: errorHandler.parseMongoError(error) }}}

}  




module.exports= new UserController();