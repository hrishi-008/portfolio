declare module '@emailjs/browser' {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  interface EmailJSResponse {
    status: number;
    text: string;
  }

  interface EmailJSStatic {
    init(publicKey: string | { publicKey: string }): void;
    send(serviceId: string, templateId: string, templateParams: Record<string, any>): Promise<EmailJSResponse>;
  }

  const emailjs: EmailJSStatic;
  export default emailjs;
} 