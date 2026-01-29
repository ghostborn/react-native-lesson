import { createContext, useState, useEffect } from "react";
import { databases, tablesDB, client } from "../lib/appwrite";
import { ID, Permission, Role, Query } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
import showTip from "../utils/showTip";

const DATABASE_ID = "6979ef83002e2d13e590";
const TABLE_ID = "books";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await tablesDB.listRows(DATABASE_ID, TABLE_ID, [
        Query.equal("userId", user.$id),
      ]);
      setBooks(response.rows);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchBookById(id) {
    try {
      return response;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function createBook(data) {
    try {
      console.log(data, "17328197812");
      const response = await tablesDB.createRow(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
      );
      console.log(response, "response");
      return response;
    } catch (error) {
      console.error(error.message);
      showTip(error.message);
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    let unsubscribe;
    // const channel = `databases.${DATABASE_ID}.tables.${TABLE_ID}`;
    const channel = `databases.${DATABASE_ID}.collections.${TABLE_ID}.documents`;

    if (user) {
      fetchBooks();
      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;
        console.log(events, "events!!!");
        if (events[0].includes("create")) {
          setBooks((prevBooks) => [...prevBooks, payload]);
        }
      });
    } else {
      setBooks([]);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
