import axios from "axios";

let publistPost = () => {
  let post = axios.post(
    "https://publist.ai/api/v2/jobs.frontend",
    { query: "tech" },
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsIm5hbWUiOiJEYW5pZWwgTG9uZG9uIiwiZW1haWwiOiJ0aGVyeXk0MDhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImVtYWlsX3ZlcmlmaWNhdGlvbl9jb2RlIjoiODMyOTk3IiwicGFzc3dvcmQiOiIkMmEkMTAkMWYxSDNYdEsweU1wemppSGN6VkZMdXRINHg1c1F0ejFPTUo5YkJmZ1lOakZBQS56T2g1ZGUiLCJwZXJtaXNzaW9ucyI6bnVsbCwidGltZXpvbmUiOiJBbWVyaWNhL0xvc19BbmdlbGVzIiwiaXBfYWRkcmVzcyI6IjI0LjUuMjE1LjEzNS8zMiIsIm9wdGlvbnMiOnt9LCJtZXRhZGF0YSI6e30sImxhc3RfbG9naW4iOiIyMDE4LTA3LTI2VDAzOjAyOjQ1LjI3M1oiLCJsYXN0X2FjdGl2ZSI6IjIwMTgtMDctMjZUMDM6MDI6NDUuMjczWiIsInVwZGF0ZWQiOiIyMDE4LTA3LTI2VDAzOjAyOjQ1LjI3M1oiLCJjcmVhdGVkIjoiMjAxOC0wNy0yNlQwMzowMjo0NS4yNzNaIiwiaWF0IjoxNTMyNTc0MTY2LCJleHAiOjE1MzM3ODM3NjZ9.rUBFT9TerxyFGhj1s6CiwRf_avEcxhGfhs0LCPqCTXg"
      }
    }
  );
  return post;
};
export { publistPost };
