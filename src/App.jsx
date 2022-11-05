import {Layout} from "./components/Layout/Layout";
import {GenrePage} from "./pages/GenrePage/GenrePage";
import {genres} from "./consts/mock"
import {BookPage} from "./pages/BookPage/BookPage";

export function App() {
    return <Layout>
        <GenrePage genres={genres}/>
        {/*<BookPage book={genres[0].books[0]}/>*/}
    </Layout>
}