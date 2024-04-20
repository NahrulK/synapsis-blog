import { GetAUserData } from "@/types/users/GetAUsersData";
import { GetAllUserstList } from "@/types/users/GetAllUserstList";

export const fetchAllUserList = async (
  page: number,
  limit: number
): Promise<GetAllUserstList> => {
  // Set the required headers for the API request
  const response = await fetch(
    `${String(
      process.env.NEXT_PUBLIC_BASE_URL
    )}/users?page=${page}&per_page=${limit}`,
    { next: { revalidate: 0 } }
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
    { next: { revalidate: 0 } }
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
