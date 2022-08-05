import Headline  from "./Headline"
import ProudectPic from "./ProudectPic"
import Proudect from "./Proudect.component"

function Home(){
    let camelPicsArr = ["camel.jpeg","camel 2.jpeg","camel 3.jpeg","camel 4.jpeg"]
    let namesArr = ["Batel Haiylo","Lior David","Or Gedamo","Aviel Teka","Daniel Gadamo"]
    return (
    <div>Welcome
        {namesArr.map(name => 
            <Headline style = "disply: flex;" fullName = {`${name}`}/>
        )}
        {camelPicsArr.map(picItem => (
            <ProudectPic src = {`images/${picItem}`}/>)
        )}
        <Proudect/>
    </div>
    )
}
export default Home