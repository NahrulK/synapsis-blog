import { GetAUserData } from "@/types/users/GetAUsersData";



  export const fetchAUser = async (
    idUser: number
  ): Promise<GetAUserData> => {
    // Set the required headers for the API request
    const response = await fetch(
      `${String(
        process.env.NEXT_PUBLIC_BASE_URL
      )}/users/${idUser}`,
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
  
  