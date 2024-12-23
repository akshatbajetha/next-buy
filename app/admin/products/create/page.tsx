import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/actions";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckBoxInput";
import { SubmitButton } from "@/components/form/Buttons";

function CreateProductPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="product name"
              placeholder="Enter product name"
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              placeholder="Enter product company"
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            placeholder="Enter product description"
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>

          <SubmitButton text="Create Product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductPage;
