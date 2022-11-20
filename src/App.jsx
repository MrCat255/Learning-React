import { Layout } from "./components/Layout/Layout";
import { GenrePage } from "./pages/GenrePage/GenrePage";
import { BookPage } from "./pages/BookPage/BookPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { CartPage } from "./pages/Cart/CartPage";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<GenrePage />} />
            <Route path="/book/:bookId" element={<BookPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
