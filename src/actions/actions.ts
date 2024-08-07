"use server";
export async function sentEmail(prevState: any, formData: FormData) {
  const rowFormData = {
    firstName: formData.get("first_name"),
    lastName: formData.get("last_name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  console.log(rowFormData);
  return {
    message: `Thank you for contacting us ${rowFormData.firstName} ${rowFormData.lastName}! Sorry the contact form is under construction. Please contact us later`,
  };
}
