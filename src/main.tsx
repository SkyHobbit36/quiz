import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from "./components/Header";
import { QuestComponent } from "./screens/Quest";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <div className="container">
        <Header />
        <QuestComponent />
        <Footer />
    </div>
);
