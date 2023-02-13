export const getImage  = (arryPhotos:string[]):string | void =>{
  
  function* images(arrayPhotos: string[]) {
    for(const item of arrayPhotos) {
      yield item;
    }
  }

  const generateImage = images(arryPhotos);
  const url = generateImage.next().value;
  console.log(url);
}