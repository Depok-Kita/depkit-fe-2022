import {
  HeaderResponsive as Header,
  HeadingLine,
  SectionBox,
  Body,
  Button,
  Toast,
  useWindowSize,
} from "@components";
import { InputField, InputFieldFormik } from "@components/input-field";
import { Formik, Form, FormikErrors, FormikHelpers } from "formik";
import { DonorDarah } from "@models";
import { isValidPhoneNumber } from "@utils";
import axios from "axios";

const COUNTRY_CODE = "+62";

export const RegistrationSection = () => {
  const initalValues: DonorDarah = {
    name: "",
    age: 0,
    address: "",
    institute: "",
    email: "",
    phone: COUNTRY_CODE,
    line: "",
    donationDate: "",
  };

  const MIN_AGE = 17;
  const REQUIRED_ERROR_MSG = "Harus diisi!";
  const validate = (values: DonorDarah) => {
    let errors: FormikErrors<DonorDarah> = {};
    if (!values.name) {
      errors.name = REQUIRED_ERROR_MSG;
    }
    if (!values.age) {
      errors.age = REQUIRED_ERROR_MSG;
    } else if (values.age < MIN_AGE) {
      errors.age = "Usia minimal " + MIN_AGE;
    }
    if (!values.address) {
      errors.address = REQUIRED_ERROR_MSG;
    }
    if (!values.email) {
      errors.email = REQUIRED_ERROR_MSG;
    }
    if (!values.phone) {
      errors.phone = REQUIRED_ERROR_MSG;
    } else if (!isValidPhoneNumber(values.phone)) {
      errors.phone = "Nomor telepon tidak valid. Gunakan format +628XXXXXXXX";
    }
    if (!values.donationDate) {
      errors.donationDate = REQUIRED_ERROR_MSG;
    }
    if (!values.line) {
      errors.line = REQUIRED_ERROR_MSG;
    }
    return errors;
  };

  const successToast = Toast({
    preset: "success",
    message: "Berhasil registrasi!",
  });
  const errorConflictToast = Toast({
    preset: "error",
    message: "Gagal registrasi! Anda sudah pernah registrasi sebelumnya.",
  });
  const errorToast = Toast({ preset: "error", message: "Gagal registrasi!" });

  const showRegistrationResult = (responseStatusCode: number) => {
    if (responseStatusCode == 200) {
      return successToast();
    }
    if (responseStatusCode == 409) {
      return errorConflictToast();
    }
    return errorToast();
  };

  const handleSubmit = (
    values: DonorDarah,
    helpers: FormikHelpers<DonorDarah>
  ) => {
    axios
      .post("/api/donor-darah/register", { data: values })
      .then((res) => {
        showRegistrationResult(res.status);
        helpers.setSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        showRegistrationResult(error.response.status);
        helpers.setSubmitting(false);
      });
  };
  const windowSize = useWindowSize();
  return (
    <div className="bg-denim-dark ">
      <SectionBox>
        <div className="mb-4">
          <Header
            windowSize={windowSize}
            preset="h3"
            presetDesktop="h2"
            className="text-center text-totalwhite"
          >
            Form Registrasi Donor Darah
          </Header>
          <HeadingLine className="mx-auto mb-4 tablet:mb-8 desktop:mb-12" />
        </div>
        <div className="">
          <Formik
            initialValues={initalValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form className="flex flex-col gap-2 max-w-sm mx-auto">
                <InputFieldFormik
                  name="name"
                  type="text"
                  label="Nama Lengkap"
                  placeholder="Nama Lengkap"
                  dark
                  required
                />
                <InputFieldFormik
                  name="age"
                  type="number"
                  label="Usia"
                  placeholder="Masukkan angka"
                  dark
                  required
                />
                <InputFieldFormik
                  name="address"
                  type="text"
                  label="Alamat"
                  placeholder=""
                  dark
                  required
                />
                <InputFieldFormik
                  name="institute"
                  type="text"
                  label="Asal Instansi"
                  dark
                />
                <InputFieldFormik
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="JohnDoe@gmail.com"
                  dark
                  required
                />
                <InputFieldFormik
                  name="phone"
                  type="tel"
                  label="Nomor Telepon/WhatsApp*"
                  placeholder={COUNTRY_CODE}
                  dark
                  required
                />
                <InputFieldFormik
                  name="line"
                  type="text"
                  label="Id Line"
                  dark
                  required
                />
                <InputFieldFormik
                  name="donationDate"
                  type="date"
                  label="Tanggal Donor Darah"
                  required
                  dark
                />
                <Button
                  preset="primaryLight"
                  className="mt-4  self-center"
                  type="submit"
                  disabled={props.isSubmitting}
                >
                  Daftar
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </SectionBox>
    </div>
  );
};
