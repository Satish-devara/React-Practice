import Feed from "./Feed"
import { useContext } from "react";
import DataContext from "./context/DataContext";

function Home(){
    const {searchResults, fetchError, isLoading} = useContext(DataContext);
    return(
        <main className="Home">
           {isLoading && !fetchError && (
            <p className="statusMsg">Loading Posts...</p>
           )}
           {fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError}</p>}
           {!isLoading && !fetchError && (searchResults.length? <Feed posts={searchResults} /> : <p className="statusMsg"> No posts to display</p>)}
        </main>
    )
}

export default Home