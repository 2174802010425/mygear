This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy lên Vercel

### Phương pháp 1: Deploy qua Vercel Dashboard (Khuyến nghị)

1. **Chuẩn bị dự án trên GitHub/GitLab/Bitbucket**
   - Đảm bảo code của bạn đã được push lên repository
   - Nếu chưa có, tạo repository mới và push code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <URL_REPOSITORY_CỦA_BẠN>
   git push -u origin main
   ```

2. **Đăng nhập vào Vercel**
   - Truy cập [vercel.com](https://vercel.com)
   - Đăng nhập bằng GitHub/GitLab/Bitbucket account

3. **Import dự án**
   - Click vào "Add New..." → "Project"
   - Chọn repository của bạn
   - Vercel sẽ tự động phát hiện đây là Next.js project

4. **Cấu hình biến môi trường (Environment Variables)**
   - Trong màn hình cấu hình, tìm phần "Environment Variables"
   - Thêm các biến sau:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`: ID dự án Sanity của bạn
     - `NEXT_PUBLIC_SANITY_DATASET`: Dataset của Sanity (thường là "production")
     - `NEXT_PUBLIC_SANITY_API_VERSION`: Phiên bản API (mặc định: "2025-10-11")
   - Lưu ý: Đảm bảo chọn "Production", "Preview", và "Development" cho tất cả các biến

5. **Cấu hình Build Settings**
   - Build Command: `npm run build` (hoặc `npm run build --turbopack` nếu muốn dùng Turbopack)
   - Output Directory: `.next` (Vercel tự động phát hiện)
   - Install Command: `npm install`

6. **Deploy**
   - Click "Deploy"
   - Vercel sẽ tự động build và deploy dự án
   - Sau khi hoàn thành, bạn sẽ nhận được URL của dự án

### Phương pháp 2: Deploy qua Vercel CLI

1. **Cài đặt Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Đăng nhập**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Lần đầu tiên, Vercel sẽ hỏi một số câu hỏi cấu hình
   - Chọn "Yes" cho các câu hỏi mặc định

4. **Thêm biến môi trường**
   ```bash
   vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
   vercel env add NEXT_PUBLIC_SANITY_DATASET
   vercel env add NEXT_PUBLIC_SANITY_API_VERSION
   ```
   - Nhập giá trị cho từng biến khi được hỏi

5. **Deploy production**
   ```bash
   vercel --prod
   ```

### Lưu ý quan trọng

- **Sanity CORS Settings**: Đảm bảo thêm domain Vercel của bạn vào CORS settings trong Sanity Studio:
  - Truy cập [sanity.io/manage](https://sanity.io/manage)
  - Chọn project của bạn
  - Vào Settings → API → CORS origins
  - Thêm domain Vercel của bạn (ví dụ: `https://your-project.vercel.app`)

- **Sanity Studio**: Studio sẽ được deploy tại `/studio` route

- **Build Settings**: Nếu gặp lỗi build, có thể cần điều chỉnh:
  - Xóa `--turbopack` khỏi build command nếu có vấn đề
  - Đảm bảo Node.js version phù hợp (Vercel tự động chọn)

### Kiểm tra sau khi deploy

1. Truy cập URL được cung cấp bởi Vercel
2. Kiểm tra trang chủ hoạt động bình thường
3. Truy cập `/studio` để kiểm tra Sanity Studio
4. Kiểm tra console browser để đảm bảo không có lỗi

### Tài liệu tham khảo

- [Vercel Deployment Guide](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [Sanity CORS Configuration](https://www.sanity.io/docs/cors)
