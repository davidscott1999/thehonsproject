import { useState } from 'react';

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
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

  const completedMunrosCollection = collection(db, "completedMunros");

  const getMunros = async () => {
    const data = await getDocs(completedMunrosCollection);
    setCompletedMunros(data.docs.map((values) => ({ uid, ...values.data() })));
  };

  getMunros()
    .then(() => {
      setHasError(false);
      console.log("Success");
    })
    .catch((error) => {
      setHasError(true);
      setErrorMessage(error.message);
      console.log(error);
    });

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
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-large text-black uppercase"
                  >
                    Mountain
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
                  {completedMunros.map((munro) => {
                    return (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center">{munro.name}</div>
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
                            onClick={() => {
                              deleteMunro(munro);
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
      </div>
    </section>
  );
};

export { ViewLogs };
