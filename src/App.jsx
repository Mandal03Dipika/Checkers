import Board from "./components/Board/Board";
import BoardContextProvider from "./context/BoardContextProvider";

function App() {
  return (
    <>
      <div className="bg-[url(/images/2.png)] min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 relative">
        <BoardContextProvider>
          <div className="w-full flex flex-col items-center max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] 2xl:max-w-[50vw]">
            <Board />
          </div>
        </BoardContextProvider>
      </div>
    </>
  );
}

export default App;
