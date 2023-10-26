import { number, object, string } from "yup";

export const SignUpSchema = object({
  email: string()
    .email("Email không hợp lệ")
    .required("Bạn phải điền đầy đủ email"),
  fullName: string().required("Bạn phải điền đầy họ tên"),
  password: string()
    .min(8, "Mật khẩu tối thiểu 8 kí tự")
    .required("Bạn phải điền mật khẩu"),
});

export const PersonalInfoSchema = object({
  height : number().required("Bạn phải điền chiều cao"),
  weight : number().required("Bạn phải điền cân nặng"),
  age : number().required("Bạn phải điền tuổi tác"),
})

export function onInputChange<FieldType>(
  field: keyof FieldType,
  setDataForm: any,
  dataForm: FieldType
) {
  return function (value: any) {
    setDataForm({
      ...dataForm,
      [field]: value,
    });
  };
}
