//imporiting our main algorithm class
const hamrorecommendation = require('../alogorithm/algorithm')

//our main database
const mainApiDAta = require('../ProductItem/product.json');
//formatting our database into id and contents 
const maincontent = mainApiDAta.map((products)=>{
     let id = products.id;
     //here we are formating products main  data  for better results
     let content = products.title.concat(" "+products.category+" "+products.description+" "+ products.price) 
     return(({id:id,content:content}));

    
    
})

//now initializing the constructor


const recommender = new hamrorecommendation({
    minScore:0.1,
    maxSimilarDocuments:100
})

// proceesing content  which include text into tokenizing
recommender.train(maincontent);


const recomendationcontroller = async (req,res,next)=>{
  const { id } = req.params;
  // console.log(id)
  // let id = 2;
  let notoshow = 3; 
  let recomdata = []
  //collecting similar document
  const similarDocuments = 
  recommender.getSimilarDocuments(id,0,notoshow);
  console.log(similarDocuments);
  //generating 
  let result = similarDocuments.map(({id}) => id);
  console.log(result)
  //finding products for given id
  for(i=0;i<result.length;i++){
  let id = result[i];
  let rec = mainApiDAta.findIndex(item => item.id === id);
  recomdata[i] = mainApiDAta[rec];
}//updatin score in console
  console.log(id)
  console.log(similarDocuments)
  res.send(recomdata);
 

 
}

// app.get('/getrecom/:id', (req, res) => {
//     const { id } = req.params;
//     // let id = 19;
//     let notoshow = 3; 
//     let recomdata = []
//     const similarDocuments = 
//     recommender.getSimilarDocuments(id,0,notoshow);
//     // console.log(similarDocuments);
//     let result = similarDocuments.map(({id}) => id);
//     for(i=0;i<result.length;i++){
//     let id = result[i];
//     let rec = mainApiDAta.findIndex(item => item.id === id);
//     recomdata[i] = mainApiDAta[rec];
// }
//     console.log(id)
//     console.log(similarDocuments)
//     res.send(recomdata);
   
//   });


  // app.listen(5000, () => {
  //   console.log('Server listening on port 5000');
  // });
  module.exports = recomendationcontroller;