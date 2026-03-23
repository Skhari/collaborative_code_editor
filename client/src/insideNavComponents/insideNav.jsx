import { useContext } from "react";
import { codeContext } from "../../context/codeContext";
export default function InsideNav() {
  const { receiveData, setReceivedData, handleApi, code, setCode } =
    useContext(codeContext);
  // const [code, setCode] = useState("code");

  //   useEffect(
  //     function () {
  //       const controller = new AbortController();
  //       const signal = controller.signal;
  //       const timeOut = setTimeout(async () => {
  //         try {
  //           const { data } = await axios.post(
  //             "http://localhost:3001/receiveCode",
  //             { code },
  //             { signal },
  //           );
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       }, 500);
  //       return () => {
  //         clearTimeout(timeOut);
  //         controller.abort();
  //       };
  //     },
  //     [code],
  //   );

  return (
    <div className="flex justify-between m-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleApi}
      >
        Run
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCode("")}
      >
        clear
      </button>
    </div>
  );
}
