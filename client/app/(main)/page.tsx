// next link
import Link from "next/link";

// content layout
import ContentLayout from "@/components/layouts/content-layout";

// shadcn breadcrumb
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { GetFormStats } from "@/actions/form";

import { ReactNode, Suspense } from "react";

// lucide-react icons
import {
  View,
  ClipboardType,
  MousePointerClick,
  Waypoints,
} from "lucide-react";

// shadcn ui
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

// components
import CreateFormButton from "@/components/create-form-button";

export default function Home() {
  return (
    <ContentLayout title="Home">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6"></Separator>
      <h2 className="text-4xl font-bold col-span-2">Your Forms</h2>
      <Separator className="my-6"></Separator>
      <CreateFormButton />
    </ContentLayout>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}
function StatsCards(props: StatsCardProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Visits"
        icon={<View className="text-red-500" />}
        helperText="All time form visits"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-red-200"
      />

      <StatsCard
        title="Total Submissions"
        icon={<ClipboardType className="text-orange-500" />}
        helperText="All time form submissions"
        value={data?.submissions.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-orange-200"
      />

      <StatsCard
        title="Submission rate"
        icon={<MousePointerClick className="text-green-500" />}
        helperText="Visits that result in form submission"
        value={data?.submissionRate.toLocaleString() + "%" || ""}
        loading={loading}
        className="shadow-md shadow-green-200"
      />

      <StatsCard
        title="Bounce rate"
        icon={<Waypoints className="text-cyan-500" />}
        helperText="Visits that leave without a submission"
        value={data?.submissionRate.toLocaleString() + "%" || ""}
        loading={loading}
        className="shadow-md shadow-cyan-200"
      />
    </div>
  );
}

function StatsCard({
  title,
  icon,
  helperText,
  value,
  loading,
  className,
}: {
  title: string;
  icon: ReactNode;
  helperText: string;
  value: string;
  loading: boolean;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
      </CardContent>
    </Card>
  );
}
