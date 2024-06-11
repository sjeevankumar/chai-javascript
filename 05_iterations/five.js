const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function(item,index,arr){
//     console.log(item)
// })

// coding.forEach(val=>console.log(val))

function printMe(item){
    // console.log(item)
}

coding.forEach(printMe)

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    // const {languageName,languageFileName} = item
    const languageName = item.languageFileName
    const languageFileName = item.languageFileName
    // console.log(languageName,languageFileName);
})