// This file explicitely disables ssr which is necessary for the pdf viewer
export const handle = async ({ event, resolve }) => {
    const response = await resolve(event, {
      ssr: false,
    });
    return response;
};