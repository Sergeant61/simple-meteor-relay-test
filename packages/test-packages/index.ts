import { createMethod } from "meteor/zodern:relay";
import { z } from "zod";

const methodSchema = z.object({
  slug: z.string(),
  _id: z.string(),
});

type TMethodType = z.infer<typeof methodSchema>;

const RoleCheck = function (roles: string[]) {
  return function pipelineStep(input) {
    return input
  }
}

export const checkClientEmailChannel = createMethod({
  schema: methodSchema,
}).pipeline(RoleCheck(["permissions.support.ticketSystems.update"]), async function ({ slug, _id }: TMethodType): Promise<void> {
  this.unblock();
});
