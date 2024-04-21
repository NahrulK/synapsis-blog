import { ErrorType } from "@/types/ErrorType";
import { GetAUserData } from "@/types/users/GetAUsersData";
import { GetAllUserstList } from "@/types/users/GetAllUserstList";

export const fetchAllUserList = async (
  page: number,
  limit: number,
  filters: string
): Promise<GetAllUserstList> => {
  // Set the required headers for the API request
  const response = await fetch(
    `${String(
      process.env.NEXT_PUBLIC_BASE_URL
    )}/users?page=${page}&per_page=${limit}${filters}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    // Log the error or handle it accordingly
    console.error(`Error fetching data: ${response.status}`);
  }

  // Parse the response as JSON
  const result: GetAllUserstList = await response.json();

  return result;
};

export const fetchAUser = async (idUser: number): Promise<GetAUserData> => {
  // Set the required headers for the API request
  const response = await fetch(
    `${String(process.env.NEXT_PUBLIC_BASE_URL)}/users/${idUser}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    // Log the error or handle it accordingly
    console.error(`Error fetching data: ${response.status}`);
  }

  // Parse the response as JSON
  const result: GetAUserData = await response.json();

  return result;
};

export const deleteAUser = async (idUser: number): Promise<boolean> => {
  // Set the required headers for the API request
  try {
    const requestDeleteUser = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/${idUser} `,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      }
    );

    if (requestDeleteUser.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

export const postAUser = async (
  name: string,
  email: string,
  gender: string,
  status: string
): Promise<GetAUserData | ErrorType> => {
  // Set the required headers for the API request
  try {
    const requestCreateUser = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
        body: JSON.stringify({
          name: name,
          email: email,
          gender: gender,
          status: status,
        }),
      }
    );

    const userCreated: GetAUserData | ErrorType =
      await requestCreateUser.json();
    // const  userCreatedError: ErrorType = await requestCreateUser.json();

    if (!requestCreateUser.ok) {
      console.error(requestCreateUser.status);
    }

    return userCreated;
  } catch (error) {
    throw error;
  }
};

export const updateAUser = async (
  idUser: number,
  name: string,
  email: string,
  gender: string,
  status: string
): Promise<GetAUserData | ErrorType> => {
  // Set the required headers for the API request
  try {
    const requestCreateUser = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/${idUser}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
        body: JSON.stringify({
          name: name,
          email: email,
          gender: gender,
          status: status,
        }),
      }
    );

    const userCreated: GetAUserData | ErrorType =
      await requestCreateUser.json();
    // const  userCreatedError: ErrorType = await requestCreateUser.json();

    if (!requestCreateUser.ok) {
      console.error(requestCreateUser.status);
    }

    return userCreated;
  } catch (error) {
    throw error;
  }
};
