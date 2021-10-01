const reporterSchema = require('./../model/reporter');
const errorHandler = require('../utils/error.handler');


class ReporterController{
		
	async add(farm){
		try{
			let response = await reporterSchema.create(farm);
			return { status: "success",   msg:"employee Added successfully",
			          result: response, message: "Added Successfully" };
		   }
	    catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let responce=await reporterSchema.aggregate([
                {$lookup:
                  {
                    from: "cities",
                    localField: "City",
                    foreignField: "_id",
                    as: "reporterCity"
                  }
                },
               
              ]);

            return {
				response: responce,
				
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchdata(id){
		try{
			let response = await reporterSchema.find({'_id':id});
			
				return {
					response: response,
				
				};
			
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let responce = await reporterSchema.deleteOne({_id: id});
			return {
				status: "success",
				response: responce
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
            let response = await reporterSchema.update({_id: id}, body);
            return { status: "success", msg:"employee Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
    async search(name){
        try{
            let responce = await reporterSchema.find({name:{$regex:name,$options:"$i"}}); 
            if(!responce){
                throw new Error('invalid creds'); }
            return { response: responce  }
             } catch(error){
              return {
                status: "error",
                    error: errorHandler.parseMongoError(error) }}}
    
    

}
module.exports = new ReporterController();