import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "./validationSchema";
import { createData } from "../../models/createData";
import parseData from "src/models/parseData";

import { Button } from "src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import { Separator } from "src/components/ui/separator";
import { Switch } from "src/components/ui/switch";
import { CustomInput } from "src/components/ui/customInput";

const MyForm = ({ setData }) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      initialAmount: "",
      initialContribution: "",
      rateOfReturn: "",
      duration: "",
      updateTotalAmountByInflation: false,
      updateContributionByInflation: false,
      updateContributionByRateOfIncrease: false,
      inflation: "",
      contributionRateOfIncrease: "",
    },
  });
  const { control, watch, handleSubmit } = methods;

  const watchAdvanced = watch([
    "updateTotalAmountByInflation",
    "updateContributionByInflation",
    "updateContributionByRateOfIncrease",
  ]);

  const onSubmit = (inputData) => {
    const parsedInputData = parseData(inputData);
    const data = createData(parsedInputData);
    console.log({ inputData });
    setData(data);
  };

  return (
    <main className="container mx-auto max-w-xl p-4">
      <h1 className="text-2xl">Planejamento Financeiro</h1>
      <Separator className="my-2" />
      <Form {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            <FormField
              name="initialAmount"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Valor Inicial</FormLabel>
                  <FormControl>
                    <CustomInput
                      {...field}
                      className="text-sm"
                      adornment="R$"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="initialContribution"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Valor dos Aportes</FormLabel>
                  <FormControl>
                    <CustomInput {...field} adornment="R$" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="rateOfReturn"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Retorno Esperado</FormLabel>
                  <FormControl>
                    <CustomInput
                      {...field}
                      adornment="%"
                      adornmentProps={{
                        position: "end",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="duration"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Duração</FormLabel>
                  <FormControl>
                    <CustomInput
                      {...field}
                      adornment="anos"
                      adornmentProps={{
                        position: "end",
                        adornmentClassName: "text-xs",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-8">
            <FormField
              name="updateTotalAmountByInflation"
              control={control}
              render={({ field }) => (
                <FormItem className="my-4 flex items-center space-x-4 space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel
                    className={watchAdvanced[0] ? "opacity-100" : "opacity-50"}
                  >
                    Corrigir patrimônio pela inflação
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              name="updateContributionByInflation"
              control={control}
              render={({ field }) => (
                <FormItem className="my-4 flex items-center space-x-4 space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel
                    className={watchAdvanced[1] ? "opacity-100" : "opacity-50"}
                  >
                    Corrigir aportes pela inflação
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              name="updateContributionByRateOfIncrease"
              control={control}
              render={({ field }) => (
                <FormItem className="my-4 flex items-center space-x-4 space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel
                    className={watchAdvanced[2] ? "opacity-100" : "opacity-50"}
                  >
                    Utilizar crescimento dos aportes
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            <FormField
              disabled
              name="inflation"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`font-bold ${watchAdvanced[0] || watchAdvanced[1] ? "opacity-100" : "opacity-50"}`}
                  >
                    Inflação
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={!(watchAdvanced[0] || watchAdvanced[1])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="contributionRateOfIncrease"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`font-bold ${watchAdvanced[2] ? "opacity-100" : "opacity-50"}`}
                  >
                    Taxa de crescimento dos aportes
                  </FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!watchAdvanced[2]} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="mx-auto mt-8 flex items-center px-8 py-4 font-bold uppercase"
          >
            Calcular
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default MyForm;
