import AccessKeyId, {SecretAccessKey} from "../utility_components/aws";
import Owner from "../utility_components/owner";
// import entire SDK
import * as S3 from "aws-sdk/clients/s3";

async const GetArticles = (owner) => {
        const bucket = new S3({
          accessKeyId: AccessKeyId(),
          secretAccessKey: SecretAccessKey(),
          //region: 'YOUR-REGION'
        });
        //Key
    
        const params = {
          Bucket: "onome",
          Key: "" + owner,
        };

          const data = await bucket.getObject(params).promise();
          return JSON.parse(data.Body.toString());
       
}

 export const PopularContent = () => {
    let popularItem = [];
    GetArticles(Owner())
    .then(data=>{
      for(let i = 0; i< 4 ; i++){
          let item ={
              id: data[i].id,
              display: data[i].display,
              isVideo: data[i].isVideo,
              title:data[i].title
          }
          popularItem.push(item);
      }
    }).catch(err=>{
        ErrorCheck(err); 
    })
    return popularItem;  
}

export const RecentPostContent = () => {
    let rpostItem = [];
    GetArticles(Owner())
    .then(data=>{
      for(let i = 0; i< 4 ; i++){
          let item ={
              id: data[i].id,
              display: data[i].display,
              isVideo: data[i].isVideo,
              title:data[i].title,
              date: data[i].date
          }
          rpostItem.push(item);
      }
    }).catch(err=>{
        ErrorCheck(err); 
    })
    return rpostItem;  
}

export const Categories = () => {
    let cat = {
        health:0,
        selfImprovement:0,
        loveRelationship:0,
        marriage:0,
        religion:0,
        karma:0,
        quote:0,
        music:0
    }
    GetArticles(Owner())
    .then(data=>{
        for (const item of data) {
            switch (item.category) {
                case "Health":
                    cat ={
                        ...cat,
                        health: cat.health + 1
                    }
                    break;
                    case "Self Improvement":
                        cat ={
                            ...cat,
                            selfImprovement: cat.selfImprovement + 1
                        }
                        break;
                        case "Love & Relationship":
                            cat ={
                                ...cat,
                                loveRelationship: cat.loveRelationship + 1
                            }
                            break;
                            case "Marriage":
                                cat ={
                                    ...cat,
                                    marriage: cat.marriage + 1
                                }
                                break;
                                case "health":
                                    cat ={
                                        ...cat,
                                        health: cat.health + 1
                                    }
                                    break;
                                    case "Religion":
                                        cat ={
                                            ...cat,
                                            religion: cat.religion + 1
                                        }
                                        break;
                                        case "Karma":
                                            cat ={
                                                ...cat,
                                                karma: cat.karma + 1
                                            }
                                            break;
                                            case "Quote":
                                                cat ={
                                                    ...cat,
                                                    quote: cat.quote + 1
                                                }
                                                break; 
                                                case "Music":
                                                    cat ={
                                                        ...cat,
                                                        music: cat.music + 1
                                                    }
                                                    break;                                          
            
                default:
                    break;
            }
        } 
    
    }).catch(err=>{
        ErrorCheck(err); 
    })
    return cat;  
}



const CarouselContent = () => {
    let carouselItem = [];
    GetArticles(Owner())
    .then(data=>{
      for(let i = 0; i< 4 ; i++){
          let item ={
              display: data[i].display,
              isVideo: data[i].isVideo,
              date: data[i].date,
              title:data[i].title
          }
          carouselItem.push(item);
      }
    }).catch(err=>{
        ErrorCheck(err); 
    })
    return carouselItem;  
}

const ErrorCheck = (err) => {
    if (err.code === "NoSuchKey") {
        console.log(`NoSuchKey`);
      } else if (err.code === "NetworkingError") {
        console.log(`NetworkingError`);
      } else {
        console.log(`Something went wrong.....`);
      }
}

export const DisplayedArticle = (category) => {
    let article = [];
    GetArticles(Owner())
    .then(data=>{
        for (const item of data) {
            if(item.category === category){
                article.push(item);
            }  
        }
    })
    .catch(err=>{
        ErrorCheck(err); 
    })
    return  article;
}
 
export default CarouselContent;
