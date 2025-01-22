"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { InteractiveHoverButton } from "@/components/ui/interactive-button";

import { createDashboard } from "@/server/dashboards";

export function NodeCreator() {
  const router = useRouter();

  const formSchema = z.object({
    name: z.string().max(30, {
      message: "Maximum 30 chars.",
    }),
    source: z.string(),
    dataType: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
        source: "",
      dataType: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let newDashboard = await createNode({
      name: values.name,
        source: values.source,
      dataType: values.dataType,
    });

    if (!newDashboard) {
      return;
    }

    window.location.href = `/dashboard/${newDashboard.internalID}`;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex w-full flex-col space-y-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Dashboard name"
                  {...field}
                  className="h-10"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your sites URL (optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://myapp.com"
                  {...field}
                  className="h-10"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row gap-3 self-end justify-self-end">
          <InteractiveHoverButton
            type="submit"
            className="w-36"
            text="Continue"
          />
        </div>
      </form>
    </Form>
  );
}
