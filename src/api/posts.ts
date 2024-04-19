import { GetCommentsPost } from "@/types/posts/GetCommentPost";
import { GetPostDetail } from "@/types/posts/GetPostDetail";
import { GetPostList } from "@/types/posts/GetPostList";

export const fetchAllPostList = async (
    page: number,
    limit: number
  ): Promise<GetPostList> => {
    // Set the required headers for the API request
    const response = await fetch(
      `${String(
        process.env.NEXT_PUBLIC_BASE_URL
      )}/posts?page=${page}&per_page=${limit}`,
      { next: { revalidate: 0 } }
    );
  
    if (!response.ok) {
      // Log the error or handle it accordingly
      console.error(`Error fetching data: ${response.status}`);
    }
  
    // Parse the response as JSON
    const result: GetPostList = await response.json();
  
    return result;
  };

  export const fetchAPostDetail = async (
    idpost: number
  ): Promise<GetPostDetail> => {
    // Set the required headers for the API request
    const response = await fetch(
      `${String(
        process.env.NEXT_PUBLIC_BASE_URL
      )}/posts/${idpost}`,
      { next: { revalidate: 0 } }
    );
  
    if (!response.ok) {
      // Log the error or handle it accordingly
      console.error(`Error fetching data: ${response.status}`);
    }
  
    // Parse the response as JSON
    const result: GetPostDetail = await response.json();
  
    return result;
  };
  

  export const fetchAllPostComments = async (
    idpost: number
  ): Promise<GetCommentsPost> => {
    // Set the required headers for the API request
    const response = await fetch(
      `${String(
        process.env.NEXT_PUBLIC_BASE_URL
      )}/posts/${idpost}/comments`,
      { next: { revalidate: 0 } }
    );
  
    if (!response.ok) {
      // Log the error or handle it accordingly
      console.error(`Error fetching data: ${response.status}`);
    }
  
    // Parse the response as JSON
    const result: GetCommentsPost = await response.json();
  
    return result;
  };
  
  