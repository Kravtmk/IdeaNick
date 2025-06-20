import { Segment } from "../../components/Segment";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { useFormik } from "formik";
import styles from "./index.module.scss";

export const NewIdeaPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      nick: "",
      description: "",
      text: "",
    },
    validate: (values) => {
      const errors: Partial<typeof values> = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.nick) {
        errors.nick = "Nick is required";
      } else if (!values.nick.match(/^[a-z0-9-]+$/)) {
        errors.nick =
          "Nick may contain only lowercase letters, numbers and dashes";
      }
      if (!values.description) {
        errors.description = "Description is required";
      }
      if (!values.text) {
        errors.text = "Text is required";
      } else if (values.text.length < 100) {
        errors.text = "Text should be at least 100 characters long";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.info("Submitted", values);
    },
  });

  return (
    <>
      <Segment>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <Input name="name" label="Name" formik={formik} />
          <Input name="nick" label="Nick" formik={formik} />
          <Input name="description" label="Description" formik={formik} />
          <Textarea name="text" label="Text" formik={formik} />
          {!formik.isValid && !!formik.submitCount && (
            <div style={{ color: "red" }}>Some fields are invalid</div>
          )}
          <button type="submit" className={styles.submitButton}>
            Create Idea
          </button>
        </form>
      </Segment>
    </>
  );
};
