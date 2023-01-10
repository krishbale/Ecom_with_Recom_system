
  const rawdocs = require('../server/ProductItem/product.json');



  
  const formatteddocs = rawdocs.map((products)=>{
    let id = products.id;
    let content = products.title.concat(" "+products.category+" "+products.description+" "+ products.price) 
    return(({id:id,content:content}));

   
   
})
  // Extract the content of each document
  let docContents = formatteddocs.map(doc => doc.content);
  
  // Calculate the tf-idf vectors for the documents
  let vectors = tfidf(docContents);
  
  let scorearray = []
  // Calculate the cosine similarity between each pair of documents
  for (let i = 0; i < vectors.length; i++) {
    for (let j = 0; j < i; j ++) {
      let similarity = cosineSimilarity(vectors[i], vectors[j]);
      const scoreobj = {
        id:formatteddocs[i].id,
        id1:formatteddocs[j].id,
        score:similarity
      }
      scorearray.push(scoreobj);

      // console.log(`Similarity between documents ${formatteddocs[i].id} and ${formatteddocs[j].id}: ${similarity}`);
    }
  }

  // scorearray.sort((b,a)=> a.score-b.score)
  // console.log(scorearray);
  //hello from balkrishna
  // if(scorearray.id1==id  || scorearray.id2 ==id){

  //   scorearray.slice(0,3)
  // }
// console.log(scorearray);



function tfidf(docs) {
    // Create an object to store the term frequency for each term in each document
    let termFreq = {};
    // Create an array to store the tf-idf values for each term in each document
    let tfidfValues = [];
  
    // Loop through each document
    for (let i = 0; i < docs.length; i++) {
      // Split the document into an array of terms
      let split = docs[i].split(' ');
    
      let stopwords = ["i", "me", "my","With", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]

// Filtering out the stopwords
let terms = split.filter(word => !stopwords.includes(word));  
      // Calculate the term frequency for each term in the document
      console.log(terms)
      for (let j = 0; j < terms.length; j++) {
        let term = terms[j];
        if (termFreq[term]) {
          termFreq[term][i] = termFreq[term][i] ? termFreq[term][i] + 1 : 1;
        } else {
          termFreq[term] = {};
          termFreq[term][i] = 1;
        }
      }
    }
  
    // Loop through each term in the term frequency object
    for (let term in termFreq) {
      // Calculate the idf value for the term
      let idf = Math.log(docs.length / Object.keys(termFreq[term]).length);
  
      // Loop through each document to calculate the tf-idf value for the term
      for (let i = 0; i < docs.length; i++) {
        // Calculate the term frequency for the term in the document
        let tf = termFreq[term][i] ? termFreq[term][i] : 0;
        // Calculate the tf-idf value for the term in the document
        let tfidf = tf * idf;
        // Add the tf-idf value to the array
        tfidfValues.push({ term: term, doc: i, tfidf: tfidf });
      }
    }
  
    // Create an array of vectors for each document
    let vectors = [];
    for (let i = 0; i < docs.length; i++) {
      // Create an object to store the tf-idf values for each term in the document
      let vector = {};
      // Loop through the array of tf-idf values to find the values for the current document
      for (let j = 0; j < tfidfValues.length; j++) {
        if (tfidfValues[j].doc === i) {
          vector[tfidfValues[j].term] = tfidfValues[j].tfidf;
        }
      }
      // Add the vector object to the array of vectors
      vectors.push(vector);
    }
  
    // Return the array of vectors
    return vectors;
  }
  function cosineSimilarity(vec1, vec2) {
    // Initialize the dot product and magnitudes of the vectors
    let dotProduct = 0;
    let vec1Magnitude = 0;
    let vec2Magnitude = 0;
  
    // Loop through the keys in the first vector
    for (let key in vec1) {
      // Check if the key exists in the second vector
      if (vec2[key]) {
        // Calculate the dot product
        dotProduct += vec1[key] * vec2[key];
      }
      // Calculate the magnitude of the first vector
      vec1Magnitude += vec1[key] * vec1[key];
    }
  
    // Loop through the keys in the second vector
    for (let key in vec2) {
      // Calculate the magnitude of the second vector
      vec2Magnitude += vec2[key] * vec2[key];
    }
  
    // Calculate the magnitudes of the vectors
    vec1Magnitude = Math.sqrt(vec1Magnitude);
    vec2Magnitude = Math.sqrt(vec2Magnitude);
  
    // Calculate and return the cosine similarity
    return dotProduct / (vec1Magnitude * vec2Magnitude);
  }
//   let vec1 = { term1: 0.5, term2: 0.5 };
//   let vec2 = { term1: 0.5, term2: 0.5 };
//   let similarity = cosineSimilarity(vec1, vec2);
//   console.log(similarity);
    
  

  // finally sort the similar documents by descending order


module.exports = scorearray;