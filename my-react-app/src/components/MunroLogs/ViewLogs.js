import {
  useEffect,
  useState,
} from 'react';

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';

const ViewLogs = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();
  const { currentUser } = useAuth();
  const { uid } = currentUser;
  const [completedMunros, setCompletedMunros] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const completedMunrosCollection = collection(db, "completedMunros");

  useEffect(() => {
    if (uid === undefined) {
      return;
    }
    const queryRef = query(
      collection(db, "completedMunros"),
      where("uid", "==", uid)
    );

    const getCompletedMunros = async () => {
      const data = await getDocs(queryRef);
      setCompletedMunros(
        data.docs.map((values) => ({ uid, ...values.data() }))
      );
    };
    getCompletedMunros();
  }, [uid]);

  const deleteMunro = async (munro) => {
    const munroDoc = doc(completedMunrosCollection);
    await deleteDoc(munroDoc);
  };

  return (
    <section
      className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/logs.jpeg?alt=media&token=92c7c440-af78-4b21-bda6-e0a38ef9a358')",
        backgroundColor: "transparent",
      }}
    >
      <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
        <input
          type="search"
          className="form-control relative min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2 ml-8"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-large text-black uppercase"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-large text-black uppercase"
                >
                  smcID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-large text-black uppercase"
                >
                  Region
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-large text-black uppercase"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-large text-black uppercase"
                >
                  Comment
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-large text-black uppercase"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <>
                {completedMunros
                  .filter((munro) => {
                    if (searchTerm === "") {
                      return munro;
                    } else if (
                      munro.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return munro;
                    }
                  })
                  .map((munro) => {
                    return (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center">{munro.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center">{munro.smcid}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center">
                            {munro.region}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {munro.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {munro.comment}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={(munro) => {
                              console.log("onClick delete");
                              deleteMunro();
                              console.log("sucessful");
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export { ViewLogs };
