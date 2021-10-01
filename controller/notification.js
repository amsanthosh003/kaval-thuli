const notificationSchema = require('./../model/notification');
const errorHandler = require('../utils/error.handler');


class NotificationController{
		
	async add(farm){
		try{
			let response = await notificationSchema.create(farm);
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
			let responce=await notificationSchema.aggregate([
                {$lookup:
                  {
                    from: "news",
                    localField: "News",
                    foreignField: "_id",
                    as: "newsDetails"
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
			let response = await notificationSchema.find({'_id':id});
			
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
			let responce = await notificationSchema.deleteOne({_id: id});
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
            let response = await notificationSchema.update({_id: id}, body);
            return { status: "success", msg:"employee Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
    async search(title){
        try{
            let responce = await notificationSchema.find({title:{$regex:title,$options:"$i"}}); 
            if(!responce){
                throw new Error('invalid creds'); }
            return { response: responce  }
             } catch(error){
              return {
                status: "error",
                    error: errorHandler.parseMongoError(error) }}}
    
    

}
module.exports = new NotificationController();