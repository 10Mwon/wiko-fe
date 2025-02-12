// // utils/s3Utils.ts
// import { useS3Upload } from "next-s3-upload";

// export const useS3Uploader = () => {
//   const { uploadToS3 } = useS3Upload();

//   const uploadImage = async (file: File): Promise<string> => {
//     const result = await uploadToS3(file);
//     return `https://rootimpact7.s3.ap-northeast-2.amazonaws.com/profileImg/${result.key}`;
//   };

//   return { uploadImage };
// };
