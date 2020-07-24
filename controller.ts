
const getServerResponse = ({response}: {response: any}) => {
    response.body = {
        success: true,
        data: "This is the entire server response"
    }
}
const postServerRequest = async ({request, response}: {request:any, response:any})=>{
    const body = await response.body()
    if (!request.hasBody){
        console.log("No BODYYY")
    }
    // Put logic here
    response.body = {
        success: true,
        data: "Your Put request is complete"
    }
}

export { getServerResponse, postServerRequest }