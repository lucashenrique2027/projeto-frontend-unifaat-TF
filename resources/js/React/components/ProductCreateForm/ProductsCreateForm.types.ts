export interface ProductFormData {
  name: string;
  description: string;
}

export interface ProductCreateFormProps {
  onCreate: (data: ProductFormData) => void;
}
''