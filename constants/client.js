import  {createClient}  from "@sanity/client";
import  imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_REACT_APP_SANITY_PROJECT_ID,
    dataset:"production",
    apiVersion:'2023-05-03',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
    
    if(source)
    {
        
        try{
            return builder.image(source)
            
        }
        catch{
            return "/"

        }
         

    }
    else{
        return "/"
    }
        
    
    


}