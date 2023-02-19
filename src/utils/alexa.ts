export const sendNotificationToAlexa = async (
  notification: string,
  accessCode: string,
  title = ""
) => {
  try {
    const response = await fetch("https://api.notifymyecho.com/v1/NotifyMe", {
      method: "POST",
      body: JSON.stringify({
        notification,
        accessCode,
        title,
      }),
    });

    const result = await response.json();

    if (response.status !== 200) {
      throw new Error(result?.message ?? "Error sending notification to alexa");
    }

    return true;
  } catch (e: any) {
    throw new Error(e?.message ?? "Error sending notification to alexa");
  }
};
