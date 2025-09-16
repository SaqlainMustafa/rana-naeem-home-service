export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp?: string;
  address?: string;
}
