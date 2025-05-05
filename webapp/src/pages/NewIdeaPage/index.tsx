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
          <button type="submit" className={styles.submitButton}>
            Create Idea
          </button>
        </form>
      </Segment>
    </>
  );
};
