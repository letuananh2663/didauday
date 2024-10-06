import { auth } from "@clerk/nextjs/server";

const adminIds = [
  "user_2m3JvNJfznIaKw5BxjKTjFYsK7E",
  "user_2n1DTrY6G9WjhqK8voZj9duXijy",
  "user_2n1D4yyw112P9rRZhRD1zkatidT",
  "user_2n1HqEuRA8KhGIv9EkUGgMNdyNA",
  "user_2n2ascIEmNYZBOATiqOpwsTNEih",
  "user_2n3jFQro1XzL0lKdg9Dhmxm0qKV",
];

export const getIsAdmin = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
